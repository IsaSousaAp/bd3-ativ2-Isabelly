const database= 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

db.createCollection(collection)



db[collection].insertMany(
    [
        
            {
                "nome_prod": "Arroz",
                "valor_prod": 25.99,
                "quant_prod": 30,
                "fabri_prod": "Camil",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Alimentação básica"
            },
            {
                "nome_prod": "Feijão",
                "valor_prod": 12.99,
                "quant_prod": 50,
                "fabri_prod": "Camil",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Alimentação básica"
            },
            {
                "nome_prod": "Macarrão",
                "valor_prod": 4.99,
                "quant_prod": 100,
                "fabri_prod": "Nestlé",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Alimentação básica"
            },
            {
                "nome_prod": "Óleo de soja",
                "valor_prod": 7.99,
                "quant_prod": 40,
                "fabri_prod": "Liza",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Alimentação básica"
            },
            {
                "nome_prod": "Açúcar",
                "valor_prod": 3.99,
                "quant_prod": 60,
                "fabri_prod": "União",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Alimentação básica"
            },
            {
                "nome_prod": "Sal",
                "valor_prod": 1.49,
                "quant_prod": 80,
                "fabri_prod": "Cisne",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Alimentação básica"
            },
            {
                "nome_prod": "Farinha de trigo",
                "valor_prod": 4.49,
                "quant_prod": 50,
                "fabri_prod": "Várzea",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Alimentação básica"
            },
            {
                "nome_prod": "Farinha de milho",
                "valor_prod": 3.99,
                "quant_prod": 40,
                "fabri_prod": "Yoki",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Alimentação básica"
            },
            {
                "nome_prod": "Biscoito recheado",
                "valor_prod": 5.99,
                "quant_prod": 20,
                "fabri_prod": "Nabisco",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Snack"
            },
            {
                "nome_prod": "Leite em pó",
                "valor_prod": 18.99,
                "quant_prod": 30,
                "fabri_prod": "Nestlé",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Alimentação básica"
            },
            {
                "nome_prod": "Chocolate em pó",
                "valor_prod": 12.99,
                "quant_prod": 25,
                "fabri_prod": "Toddynho",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Alimentação básica"
            },
            {
                "nome_prod": "Café",
                "valor_prod": 14.99,
                "quant_prod": 50,
                "fabri_prod": "Pilão",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Bebida"
            },
            {
                "nome_prod": "Suco de laranja",
                "valor_prod": 5.99,
                "quant_prod": 40,
                "fabri_prod": "Do Vale",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Bebida"
            },
            {
                "nome_prod": "Refrigerante",
                "valor_prod": 6.49,
                "quant_prod": 70,
                "fabri_prod": "Coca-Cola",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Bebida"
            },
            {
                "nome_prod": "Salgadinho",
                "valor_prod": 2.99,
                "quant_prod": 100,
                "fabri_prod": "Elma Chips",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Snack"
            },
            {
                "nome_prod": "Margarina",
                "valor_prod": 4.49,
                "quant_prod": 30,
                "fabri_prod": "Qualy",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Alimentação básica"
            },
            {
                "nome_prod": "Iogurte",
                "valor_prod": 3.49,
                "quant_prod": 60,
                "fabri_prod": "Danone",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Laticínio"
            },
            {
                "nome_prod": "Queijo",
                "valor_prod": 29.99,
                "quant_prod": 20,
                "fabri_prod": "Polenghi",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Laticínio"
            },
            {
                "nome_prod": "Presunto",
                "valor_prod": 22.99,
                "quant_prod": 25,
                "fabri_prod": "Sadia",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Carnes"
            },
            {
                "nome_prod": "Linguiça",
                "valor_prod": 19.99,
                "quant_prod": 30,
                "fabri_prod": "Perdigão",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Carnes"
            },
            {
                "nome_prod": "Peito de frango",
                "valor_prod": 35.99,
                "quant_prod": 15,
                "fabri_prod": "Sadia",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Carnes"
            },
            {
                "nome_prod": "Carne bovina",
                "valor_prod": 45.99,
                "quant_prod": 20,
                "fabri_prod": "Friboi",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Carnes"
            },
            {
                "nome_prod": "Pão de forma",
                "valor_prod": 8.99,
                "quant_prod": 50,
                "fabri_prod": "Pullman",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Padaria"
            },
            {
                "nome_prod": "Pão francês",
                "valor_prod": 0.40,
                "quant_prod": 200,
                "fabri_prod": "Panificadora",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Padaria"
            },
            {
                "nome_prod": "Bolacha",
                "valor_prod": 2.99,
                "quant_prod": 150,
                "fabri_prod": "Biscoito",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Snack"
            },
            {
                "nome_prod": "Creme de leite",
                "valor_prod": 3.99,
                "quant_prod": 40,
                "fabri_prod": "Nestlé",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Laticínio"
            },
            {
                "nome_prod": "Leite condensado",
                "valor_prod": 5.99,
                "quant_prod": 30,
                "fabri_prod": "Moça",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Laticínio"
            },
            {
                "nome_prod": "Gelatina",
                "valor_prod": 1.99,
                "quant_prod": 50,
                "fabri_prod": "Dr. Oetker",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Sobremesa"
            },
            {
                "nome_prod": "Frutas em conserva",
                "valor_prod": 7.99,
                "quant_prod": 25,
                "fabri_prod": "Rica",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Conserva"
            },
            {
                "nome_prod": "Temperos",
                "valor_prod": 1.49,
                "quant_prod": 100,
                "fabri_prod": "Sazon",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Condimento"
            },
            {
                "nome_prod": "Sopa instantânea",
                "valor_prod": 2.49,
                "quant_prod": 75,
                "fabri_prod": "Knorr",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Alimentação rápida"
            },
            {
                "nome_prod": "Maionese",
                "valor_prod": 4.99,
                "quant_prod": 50,
                "fabri_prod": "Hellmann's",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Condimento"
            },
            {
                "nome_prod": "Ketchup",
                "valor_prod": 3.49,
                "quant_prod": 70,
                "fabri_prod": "Heinz",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Condimento"
            },
            {
                "nome_prod": "Mostarda",
                "valor_prod": 3.29,
                "quant_prod": 60,
                "fabri_prod": "Heinz",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Condimento"
            },
            {
                "nome_prod": "Pasta de amendoim",
                "valor_prod": 9.99,
                "quant_prod": 20,
                "fabri_prod": "Qualy",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Snack"
            },
            {
                "nome_prod": "Nozes",
                "valor_prod": 34.99,
                "quant_prod": 10,
                "fabri_prod": "Sadia",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Snack"
            },
            {
                "nome_prod": "Amêndoas",
                "valor_prod": 39.99,
                "quant_prod": 15,
                "fabri_prod": "Sadia",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Snack"
            },
            {
                "nome_prod": "Cereal matinal",
                "valor_prod": 11.99,
                "quant_prod": 25,
                "fabri_prod": "Kellogg's",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Café da manhã"
            },
            {
                "nome_prod": "Bacon",
                "valor_prod": 24.99,
                "quant_prod": 15,
                "fabri_prod": "Sadia",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Carnes"
            },
            {
                "nome_prod": "Bolo de chocolate",
                "valor_prod": 19.99,
                "quant_prod": 12,
                "fabri_prod": "Pavê",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Sobremesa"
            },
            {
                "nome_prod": "Pizza congelada",
                "valor_prod": 29.99,
                "quant_prod": 20,
                "fabri_prod": "Sadia",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Pronto"
            },
            {
                "nome_prod": "Frango empanado",
                "valor_prod": 28.99,
                "quant_prod": 25,
                "fabri_prod": "Sadia",
                "cate_prod": "Alimenticio",
                "Descri_prod": "Pronto"
            }
        
        
                ]
                
            
            
        
        
        
    
)