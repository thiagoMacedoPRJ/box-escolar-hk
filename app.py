from flask import Flask, request, render_template, redirect, jsonify
from oauth2client.service_account import ServiceAccountCredentials
from random import *
import gspread
import os


# ////////////////////////////////////////////// STORAGE GOSTEIS ///////////////////////////////////////////////


scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]

creds = ServiceAccountCredentials.from_json_keyfile_name("creds.json", scope)

client = gspread.authorize(creds)

sheet = client.open("Contador-Escola").sheet1  # Prorcure na pasta aonde você tem permissão o nome XXXX e depois..

data = sheet.get_all_records()  # Obtenha todos as informaçoes desta arquivo.

coluna = sheet.col_values(1)[1:] # pegue os gosteis
    
    



def serveUP(dat):
    scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]

    creds = ServiceAccountCredentials.from_json_keyfile_name("creds.json", scope)

    client = gspread.authorize(creds)

    sheet = client.open("Contador-Escola").sheet1  # Prorcure na pasta aonde você tem permissão o nome XXXX e depois..

    data = sheet.get_all_records()  # Obtenha todos as informaçoes desta arquivo.

    
    if dat == "1":
        coluna = sheet.col_values(1)[1:] # pegue os gosteis
        sheet.update_cell(2, 1, int(coluna[0])+1) # LINHA / COLUNA
    elif dat == "2":
        coluna2 = sheet.col_values(2)[1:] # pegue os gosteis
        sheet.update_cell(2, 2, int(coluna2[0])+1) # LINHA / COLUNA
    elif dat == "3":
        coluna3 = sheet.col_values(3)[1:] # pegue os gosteis
        sheet.update_cell(2, 3, int(coluna3[0])+1) # LINHA / COLUNA
    else:
        print("O VALOR DE DATA NÃO ESTA SENDO RECONHECIDO...")
        

    







# ////////////////////////////////////////////// STORAGE GOSTEIS ///////////////////////////////////////////////


app = Flask(__name__)
app.secret_key = 'biosec'



# Rota para a página inicial
@app.route('/', methods=["GET", "POST"])
def index():
    
    if request.method == "GET":
        gostei = sheet.col_values(1)[1:] # pegue os gosteis
        gostei2 = sheet.col_values(2)[1:] # pegue os gosteis2
        gostei3 = sheet.col_values(3)[1:] # pegue os gosteis3

        return render_template('index.html', gosteis=gostei[0], gosteis2=gostei2[0], gosteis3=gostei3[0])
    else:
        data = list(request.form.to_dict())[0]
        print(data)
        serveUP(data)
        return "nada."






# Rota para a página inicial
@app.route('/donates', methods=["GET", "POST"])
def index2():
    return render_template('index2.html')






# Rota para o QRCODE
@app.route('/qrcode', methods=["GET", "POST"])
def index3():
    if request.method == "GET":
        return render_template('index3.html')
    else:
        data = list(request.form.to_dict())[0]
        print(data)
        return "nada."
    
    
    
    
    
    
    
    
# Rota para o PERDEU
@app.route('/perdeu', methods=["GET", "POST"])
def index4():
    if request.method == "GET":
        return render_template('index4.html')
    else:
        return "nada."
    
    
    
    
    
    
    
    
    

# Rota para o GANHOU
@app.route('/ganhou', methods=["GET", "POST"])
def index5():
    if request.method == "GET":
        return render_template('index5.html')
    else:
        return "nada."
    
    






    
    
    
def main():
    p = randint(0, 500000)
    port = int(os.environ.get("PORT", p))
    app.run(host="0.0.0.0", port= port)
    

if __name__ == '__main__':
    main()
