from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .utils import load_json_file, get_player_data, authenticate_user
import os


@api_view(['POST'])
def login_view(request):
    """
    Login endpoint
    POST /api/login/
    Body: { "email": "player1@stepout.com", "password": "stepout123" }
    Returns: { "user": {...}, "token": "mock-token-123", "playerId": 1 }
    """
    try:
        email = request.data.get('email')
        password = request.data.get('password')
        
        if not email or not password:
            return Response(
                {'error': 'Email and password are required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        user_data = authenticate_user(email, password)
        
        if user_data:
            return Response({
                'user': {
                    'id': user_data['id'],
                    'name': user_data['name'],
                    'email': user_data['email'],
                    'playerId': user_data['playerId']
                },
                'token': f"mock-token-{user_data['id']}",
                'playerId': user_data['playerId']
            }, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'Invalid credentials'},
                status=status.HTTP_401_UNAUTHORIZED
            )
    
    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['GET'])
def player_report_view(request, player_id):
    """
    Get complete player report
    GET /api/players/{player_id}/report/
    Returns: Complete player data including stats, heatmaps, vectors, etc.
    """
    try:
        player_data = get_player_data(player_id)
        
        if player_data:
            return Response(player_data, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'Player not found'},
                status=status.HTTP_404_NOT_FOUND
            )
    
    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
