import httpx
def embed(prompt):
    try:
        response = httpx.post("http://localhost:11434/api/embed", json={"model": "embeddinggemma:latest", "input": prompt}).json()
        return response
    except Exception as e:
        print(f"Error generating response: {e}")
        return "Sorry, I couldn't generate a response at this time."

if __name__ == "__main__":
    prompt = "What is the capital of France?"
    embedding = embed(prompt)
    print(embedding)