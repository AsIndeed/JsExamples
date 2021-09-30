class Course{
    constructor(title,instructor,image){
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}

class UI{
    addCourseToList(course){
        const list = document.getElementById('course-list');

        var html = `
            <tr>
                <td><img style="width:100px; height:100px" src="img/${course.image}"></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
            </td>
        `;
    
        list.innerHTML += html;
    }

    clearControls(){
        const title = document.getElementById('title').value='';
        const instructor = document.getElementById('instructor').value='';
        const image = document.getElementById('image').value='';
    }

    // deleteCourse(element){
    //     if(element.classList.contains('delete')){
    //         //element.parentElement.parentElemetdocument.getElementById('new-course').addEventListener('submit',function(e){
    //             const title = document.getElementById('title').value;
    //             const instructor = document.getElementById('instructor').value;
    //             const image = document.getElementById('image').value;
            
    //             // Create Course object
    //             const course = new Course(title,instructor,image);
            
    //             // Create UI
    //             const ui = new UI();
            
    //             if(title === '' || instructor === '' || image === ''){
    //                 ui.showAlert('Please complete the form','warning');
    //             }else{
    //                 // Add Course to list  
    //                 ui.addCourseToList(course);
            
    //                 // Clear controls
    //                 ui.clearControls();
            
    //                 ui.showAlert('The course has been added!','success');
    //             }
            
                
            
    //             e.preventDefault();
    //         });
            
    //         document.getElementById('course-list').addEventListener('click',function(e){
    //             const ui = new UI();
    //             ui.deleteCourse(e.target);
    //             ui.showAlert('The course has been deleted!','danger');
    //         }); 
    //     }
    

    showAlert(message,className){
        var alert = `
        <div class="alert alert-${className}">
            ${message}
        </div>
        `;
        const row = document.querySelector('.row');
        // beforeBegin, afterBegin, beforeEnd, afterEnd
        row.insertAdjacentHTML('beforeBegin',alert);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

class Storage{
    static getCourses(){
        let courses;
        if(localStorage.getItem('courses')===null){
            courses = [];
        }else{
            courses = JSON.parse(localStorage.getItem('courses'));
        }
        return courses;
    }

    static displayCourse(){
        const courses = Storage.getCourses();
        courses.forEach(course => {
            const ui = new UI();
            ui.addCourseToList(course);
        });
    }

    static addCourse(course){
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem('courses',JSON.stringify(courses));
    }

    static deleteCourse(){

    }
}

document.addEventListener('DOMContentLoaded', Storage.displayCourse);

document.getElementById('new-course').addEventListener('submit',function(e){
    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    // Create Course object
    const course = new Course(title,instructor,image);

    // Create UI
    const ui = new UI();

    if(title === '' || instructor === '' || image === ''){
        ui.showAlert('Please complete the form','warning');
    }else{
        // Add Course to list  
        ui.addCourseToList(course);

        // Save to LS
        Storage.addCourse(course);

        // Clear controls
        ui.clearControls();

        ui.showAlert('The course has been added!','success');
    }
    e.preventDefault();
});

document.getElementById('course-list').addEventListener('click',function(e){
    const ui = new UI();
    // Delete course
    ui.deleteCourse(e.target);

    // Delete from LS
    Storage.deleteCourse();

    ui.showAlert('The course has been deleted!','danger');
});