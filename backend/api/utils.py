import json
import os


def load_json_file(filename):
    """Load JSON file from the data directory"""
    try:
        file_path = os.path.join(os.path.dirname(__file__), 'data', filename)
        with open(file_path, 'r', encoding='utf-8') as file:
            return json.load(file)
    except FileNotFoundError:
        return None
    except json.JSONDecodeError:
        return None


def authenticate_user(email, password):
    """Authenticate user against users.json"""
    users = load_json_file('users.json')
    if not users:
        return None
    
    for user in users:
        if user['email'] == email and user['password'] == password:
            return user
    
    return None


def get_player_data(player_id):
    """Get player data from JSON file"""
    filename = f'player_{player_id}.json'
    return load_json_file(filename)
