const database= 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);


db[collection].find(
    { 
        valor_prod : {$gte : 34 , $lte : 55}
    }

);