# MOKSH

## Press Title Registration Intelligence System

### *Duplicate-Prevention Engine for Publication Registrations*

**Team:** Karnel Knights
**Contributors:** Subham, akankshya, Moniksha, Nandini

---

##  Overview

The **Press Title Registration Intelligence System** is an AI-powered backend platform designed to prevent duplicate, misleading, or contextually similar publication titles from being registered.

In press and media regulation systems, title uniqueness is critical. Traditional systems rely only on exact string matching, which fails to detect:

* spelling variations
* phonetic similarities
* semantic equivalents
* contextual duplicates

This system solves that problem using a multi-layer similarity engine powered by Machine Learning, NLP, and algorithmic matching techniques.

---

##  Core Objective

Ensure **no duplicate or deceptively similar publication title** is approved during registration by evaluating similarity across multiple linguistic dimensions.

---

##  Similarity Detection Engine

The system uses a hybrid similarity pipeline combining several intelligent algorithms:

###  Semantic Similarity

Uses embedding models to compare contextual meaning of titles.

* detects meaning similarity even if wording differs
* powered by vector embeddings
* cosine similarity comparison

---

###  Phonetic Similarity

Detects titles that *sound alike* but are spelled differently.

* IPA conversion
* phoneme distance comparison
* pronunciation similarity scoring

---

###  Fuzzy String Matching

Handles spelling variations, typos, formatting differences.

* Levenshtein distance
* token similarity
* character-level comparison

---

###  Structural / Schematic Similarity

Detects structural likeness:

Example:

```
Daily News Today
Today Daily News
```

Even though order differs, structure is similar.



##  Architecture Overview

```
User Request
    ↓
API Layer (Flask)
    ↓
Candidate Fetch (SQL Filter)
    ↓
Similarity Engine
    ├── Semantic
    ├── Phonetic
    ├── Fuzzy
    └── Structural
    ↓
Score Aggregation
    ↓
Decision Engine
    ↓
Response
```

---

##  Project Structure

```
moksh-backend/
│
├── app.py                # API server
├── model_ctrl.py         # ML orchestration
├── phoneba.py            # phonetic processor
├── scrapper.py           # data ingestion
├── database2.db          # title database
│
├── model/
│   ├── embed_llama.py    # embedding generator
│   ├── populate_db.py    # dataset loader
│   └── populate_sql.py   # SQL population
```

## Hackathon Project

Built for **XIM Hackathon 2026**
Designed to demonstrate how AI + Algorithms + Databases can solve real regulatory problems.

---

## License

Open for academic and research use.
MIT License
