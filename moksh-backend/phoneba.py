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


def convert_to_ipa(title, titles_list):
    main_words = ipa_words(title)
    matches = []

    for candidate in titles_list:
        cand_words = ipa_words(candidate)
        # print(candidate)

        for m in main_words:
            # print(f"  Main word: {m}")
            for c in cand_words:
                score = similarity(m, c)
                matches.append((candidate, m, c, round(score, 2)))
    print(matches)
    return matches


if __name__ == "__main__":
    title = "shubham"
    titles_list = ["subham", "shubhu", "shubhas", "shubh"]

    results = convert_to_ipa(title, titles_list)
    print(results)
    for r in results:
        print(f"Match: {r[0]} | {r[1]} ≈ {r[2]} | score={r[3]}")