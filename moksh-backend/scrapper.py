import httpx
from time import sleep
from bs4 import BeautifulSoup

registered_url = "https://prgi.gov.in/registration-title-details?title_name=&registration_number=&owner_name=&pub_state_name=&pub_dist_name=&languages=&items_per_page=1000&page="

cancelled_url = "https://prgi.gov.in/our-services/cancelled-data-for-website?title_name=&registration_no=&items_per_page=1000&page="

defunct_url = "https://prgi.gov.in/our-services/defunct-title?title_name=&registration_no=&owner_name=&publication_state=&publication_district=&publication_language=&items_per_page=1000&page="

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
            row_data.append(td.text.strip().replace(',',''))
            # data.append(row_data)
        # print(row_data[1:-1])
        data.append(row_data[1:])
    return data

def saveData(data):
    with open('data.csv', 'a', encoding='utf-8', newline='') as f:
        for row in data:
            f.write(','.join(row) + '\n')

for page in range(0, 89):  
    paginated_url = f"{cancelled_url}{page}"
    sleep(1)  
    response = getData(paginated_url)
    if response.status_code == 200:
        data = parseData(response)
        # print(data)
        saveData(data)
        print(f"Data for page {page} saved successfully.")
    else:
        print(f"Failed to retrieve data for page {page}. Status code: {response.status_code}")



