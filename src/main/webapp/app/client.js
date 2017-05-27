import 'whatwg-fetch'

let apiRoot='api';
export default class Client {
    static createItem(item){
        let fetchData ={
            method:'POST',
            body:JSON.stringify(item)
        };
        fetch(apiRoot+ '/items/add',fetchData).then(this.loadItemsFromServer).
        catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});
    }

    static deleteItem(item){
        fetch(apiRoot+ '/items/delete/' + item.itemID).then(this.loadItemsFromServer).
        catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});
    }
    static updateItem(item){
        let fetchData ={
            method:'POST',
            body:JSON.stringify(item)
        };
        fetch(apiRoot+ '/items/update',fetchData).then(this.loadItemsFromServer).
        catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});
    }

    static createCustomer(customer){
        let fetchData ={
            method:'POST',
            body:JSON.stringify(customer)
        };
        fetch(apiRoot+ '/customers/add',fetchData).then(this.loadCustomersFromServer).
        catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});

    }
    static deleteCustomer(customer){
        fetch(apiRoot+ '/customers/delete/'+customer.customerID).then(this.loadCustomersFromServer).
        catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});
    }

    static updateCustomer(customer){
        let fetchData = {
            method:'POST',
            body:JSON.stringify(customer)
        };
        fetch(apiRoot+ '/customers/update',fetchData).then(this.loadCustomersFromServer).
        catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});
    }
    static getItems(){
        fetch(apiRoot+'/items').then(response=>response.json()).then(data=>{return data});
    }

}