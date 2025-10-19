from vertexai.preview.generative_models import GenerativeModel
import vertexai

# Substitua pelos seus dados do Google Cloud
vertexai.init(project="SEU_PROJECT_ID", location="SEU_LOCATION")

model_pro = GenerativeModel("gemini-pro-latest")
response_pro = model_pro.generate_content("Hello, Gemini Pro!")
print(f"Gemini Pro Latest: {response_pro.text}")

model_flash = GenerativeModel("gemini-flash-latest")
response_flash = model_flash.generate_content("Hello, Gemini Flash!")
print(f"Gemini Flash Latest: {response_flash.text}")
