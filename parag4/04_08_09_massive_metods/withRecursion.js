var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  alert( list.value ); // (1)

  if (list.next) {
    printList(list.next); // (2)
  }
}
printList(list);
