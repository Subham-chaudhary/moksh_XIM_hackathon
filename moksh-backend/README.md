```
BASE URL
http://127.0.0.1:5000
```

---

```
GET /
```

Returns service status or root response.

---

```
GET /registered
GET /cancelled
GET /defunct
```

**Query Parameters (optional)**

```
limit
page
title
rnum
language
periodicity
publisher
owner
publication_state
publication_district
```

**Response**

```
{
  result: [],
  total_pages: number,
  total_rows: number
}
```

---

```
POST /registertitle
```

**Body (JSON)**

```
{
  title,
  language,
  periodicity,
  owner,
  publisher,
  state,
  district
}
```

**Success Response**

```
{
  message: string
}
```

**Failure Response**

```
{
  error: string,
  results: {
    fuzzy: [],
    phoneatic: [],
    schematic: []
  }
}
```
