const database= 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

db.createCollection(collection)



db[collection].insertMany(
    [
        
            {
                "nome_prod": "Maçã",
                "valor_prod": 3.49,
                "quant_prod": 100,
                "fabri_prod": "Frutas do Brasil",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Fruta fresca"
            },
            {
                "nome_prod": "Banana",
                "valor_prod": 1.99,
                "quant_prod": 150,
                "fabri_prod": "Frutas do Brasil",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Fruta fresca"
            },
            {
                "nome_prod": "Laranja",
                "valor_prod": 2.49,
                "quant_prod": 120,
                "fabri_prod": "Frutas do Brasil",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Fruta fresca"
            },
            {
                "nome_prod": "Uva",
                "valor_prod": 4.99,
                "quant_prod": 80,
                "fabri_prod": "Frutas do Brasil",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Fruta fresca"
            },
            {
                "nome_prod": "Manga",
                "valor_prod": 3.99,
                "quant_prod": 60,
                "fabri_prod": "Frutas do Brasil",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Fruta fresca"
            },
            {
                "nome_prod": "Batata",
                "valor_prod": 2.49,
                "quant_prod": 100,
                "fabri_prod": "Hortifruti",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Legume"
            },
            {
                "nome_prod": "Cenoura",
                "valor_prod": 1.99,
                "quant_prod": 80,
                "fabri_prod": "Hortifruti",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Legume"
            },
            {
                "nome_prod": "Cebola",
                "valor_prod": 2.29,
                "quant_prod": 70,
                "fabri_prod": "Hortifruti",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Legume"
            },
            {
                "nome_prod": "Alface",
                "valor_prod": 1.49,
                "quant_prod": 50,
                "fabri_prod": "Hortifruti",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Verdura"
            }
        
        


    ]
)