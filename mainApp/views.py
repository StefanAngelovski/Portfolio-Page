from django.shortcuts import render


# Create your views here.
def display_index(request):
    return render(request, "index.html")


def display_about(request):
    return render(request, "about.html")