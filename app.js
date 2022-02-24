var input = document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')
var todos = document.querySelector('.todos')
form.addEventListener('submit',function(event) {
	event.preventDefault(); // để tránh load lại trang web
	let val = input.value.trim() // để xóa bỏ kí tự khoảng trắng 2 bên 
	if (val) {
		addTodoElement(val)
	}
	input.value = ''

})
function addTodoElement(todo){
	var li = document.createElement('li') // tạo ra 1 thẻ li mới
	li.innerHTML = `
						<span>${todo}</span>
						<i class='bx bxs-trash-alt'></i>
					`
	li.addEventListener('click',function(){  //  thêm sự kiện khi click vào li để gạch ngang text trên thẻ 
		this.classList.toggle('completed')
	})
	li.querySelector('i').addEventListener('click',function() {  // thêm sự kiện click vào icon thùng rác để có thể xóa đi thẻ li chứa icon đó
		this.parentElement.remove()
	})
	todos.appendChild(li) // thêm nút li vào cuối danh sách của todos
}







