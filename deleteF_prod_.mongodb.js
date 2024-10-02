const database= 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

db[collection].deleteMany(
    {
        fabri_prod:"Nestlé",
        cate_prod:"Alimenticio"
    
    }
);