import httpx
from time import sleep
from bs4 import BeautifulSoup

url = "https://prgi.gov.in/registration-title-details?title_name=&registration_number=&owner_name=&pub_state_name=&pub_dist_name=&languages=&items_per_page=1000&page="

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}


def getData(url):
    with httpx.Client(verify=False) as client:
        response = client.get(url, headers=headers, timeout=10)
        return response

def parseData(response):
    soup = BeautifulSoup(response.content, 'html.parser')
    table_body = soup.find('tbody', {'role': 'rowgroup'})
    data = []
    for tr in table_body.find_all('tr'):
        row_data = []
        for td in tr.find_all('td'):
            row_data.append(td.text.strip())
            # data.append(row_data)
        # print(row_data[1:-1])
        data.append(row_data[1:-1])
    return data

def saveData(data):
    with open('data.csv', 'a', encoding='utf-8', newline='') as f:
        for row in data:
            f.write(','.join(row) + '\n')

for page in range(0, 77):  
    paginated_url = f"{url}{page}"
    sleep(1)  
    response = getData(paginated_url)
    if response.status_code == 200:
        data = parseData(response)
        saveData(data)
        print(f"Data for page {page} saved successfully.")
    else:
        print(f"Failed to retrieve data for page {page}. Status code: {response.status_code}")



