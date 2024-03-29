function Initalizer(){
	this.vendingMachine = function(){
		VendingMachine.prototype.setChange = function(change){_change = change}
		VendingMachine.prototype.getChange = function(){return _change}
		VendingMachine.prototype.setItemNo = function(itemNo){_itemNo = itemNo}
		VendingMachine.prototype.getItemNo = function(){return _itemNo}
		VendingMachine.prototype.setItemNoList = function(itemNoList){_itemNoList = itemNoList}
		VendingMachine.prototype.getItemNoList = function(){return _itemNoList}
		VendingMachine.prototype.setItemList = function(itemList){_itemList = itemList}
		VendingMachine.prototype.getItemList = function(){return _itemList}
	}
}
function VendingMachineService(){
	const init = new Initalizer()
	init.vendingMachine()
	const vms = new VendingMachine()
	this.insertCoin = function(coin){	
		vms.setChange(coin)
		alert(`${vms.getChange()}원을 받음`) 
	}
	this.selectItem = function(itemNo, quantity){
		vms.setItemNo(itemNo)
		alert(`${vms.getItemNo()}:${quantity}ml 주문완료`)
	}
	this.returnChange = function(){}
	this.handleOrder = function(quantity, price, itemName){}
}