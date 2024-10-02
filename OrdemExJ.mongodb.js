const database= 'bd3_atv2';

const collection = 'bd3_atv2_produtos';


use(database);

db[collection].find({}, { cate_prod: 0, fabri_prod: 0 })
.sort({ valor_prod: -1 }) 


