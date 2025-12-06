import json

def lambda_handler(event, context):
    # TODO implement
    try:
        year = int(event['queryStringParameters']['year'])
        era = event['queryStringParameters']['era']
        
        # Check for valid year input
        if year is None or year < 1:
            raise ValueError(f"Invalid year input")
        
        # Conversion logic
        if era == "western":
            # Convert Western year to Japanese year
            # Reiwa starts on 2019
            if year >= 2019:
                value = year - 2018
                converted_year = "令和" + str(value) + "年"
            # Heisei starts on 1989
            elif year >= 1989:
                value = year - 1988
                converted_year = "平成" + str(value) + "年"
            # Showa starts on 1926
            else:
                value = year - 1925
                converted_year = "昭和" + str(value) + "年"
        elif era == "showa":
            # Convert Showa to Western year
            value = year + 1925
            converted_year = "西暦" + str(value) + "年"
        elif era == "heisei":
            # Convert Heisei to Western year
            value = year + 1988
            converted_year = "西暦" + str(value) + "年"
        elif era == "reiwa":
            # Convert Reiwa to Western year
            value = year + 2018
            converted_year = "西暦" + str(value) + "年"
        else:
            # Wrong era
            raise ValueError(f"Invalid era input")

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'converted_year': converted_year})
        }

    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': str(e)})
        }
