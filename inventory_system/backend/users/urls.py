from django.urls import path
from .views import RegisterView, ProfileView, LoginView, ProfileView, ChangePasswordView, LogoutView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('change-password/', ChangePasswordView.as_view(), name='change password'),
    path('logout/', LogoutView.as_view(), name='logout'),
]