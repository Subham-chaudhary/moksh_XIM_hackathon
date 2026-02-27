from phonemizer import phonemize
from difflib import SequenceMatcher
import os

os.environ["PHONEMIZER_ESPEAK_LIBRARY"] = r"C:\Program Files\eSpeak NG\libespeak-ng.dll"


def ipa_words(text):
    ipa = phonemize(
        text,
        backend="espeak",
        language="en-us",
        strip=True,
        with_stress=False,
        preserve_punctuation=False
    )
    # remove <=3 letter words
    return [w for w in ipa.split() if len(w) > 3]


def similarity(a, b):
    return SequenceMatcher(None, a, b).ratio()


def convert_to_ipa(title, titles_list, threshold=0.75):
    main_words = ipa_words(title)
    matches = []

    for candidate in titles_list:
        cand_words = ipa_words(candidate)

        for m in main_words:
            for c in cand_words:
                score = similarity(m, c)
                if score >= threshold:
                    matches.append((candidate, m, c, round(score, 2)))

    return matches


if __name__ == "__main__":
    title = "flower"
    titles_list = ["flour", "flower with", "floor", "flow", "flowr"]

    results = convert_to_ipa(title, titles_list)
    print(results)
    for r in results:
        print(f"Match: {r[0]} | {r[1]} ≈ {r[2]} | score={r[3]}")