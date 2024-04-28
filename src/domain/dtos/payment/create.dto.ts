
interface ItemDTO {
    id: string;
    title: string;
    quantity: number;
    unit_price: number;
    currency_id: string ;
    description: string;
  }
  
 export interface PreferenceDTO {
    items: ItemDTO[];
  }
  

export class PreferenceDTO {
    items: ItemDTO[];
    back_urls: {
      failure: string;
      pending: string;
      success: string;
    };
  
    constructor(data: any) {
      this.items = data.items;
      this.back_urls = data.back_urls;
    }
  
    validateItems() {

      this.items.forEach(item => {
        if ( !item.title || item.quantity <=  0 || item.unit_price <=  0 || !item.currency_id || !item.description) {
          throw new Error('Invalid item data');
        }

      });
    }
  }
  