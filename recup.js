/*
Must Know:
1. var, let, const (already practices);
2, default parameter
3. template string
  3.1; creat muki-line string ()
  3.3: add dynamic variable (expression): ${}
4. Arrow functino
    4.1 single parameter arrow function
    4.2 two parameters arrow function
    4.3 arrow function with function body.
    And don't forget you have to return explicitly
5. map. filter, find
6. optional chaining 
*/

// GOOD TO HAVE
/*
    1. spread operator: [...numbers, 12, 43]
    2. destructuring
       2.1 object destructuring. how to get property name as vatuabke
          const (x) = {x : 3, y:5}
      2.2: array destructuring
      const [a, b] = [3, 8, 12, 56]
    3. default parameter
    4. forEach
    5. class, object
    6. dot notation vs bracket notation

*/


// SHOULD KNOW THE NAME
/*
1. reduce 
2. innheritance
3. prototaypical chain
*/
// function loadUser(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => displayUser2(data))
// }
// function displayUser2(data){
//   const ul = document.getElementById('user-list')
//   for(let user of data){
//       console.log(user.name);

//       const li = document.createElement('li')
//       li.innerText = user.name 
//       ul.appendChild(li);
//   }
 
// }


// function diplayPosts(posts){
//   const postContainer = document.getElementById('post-container');
//  for(let post of posts){
//    const postDiv = document.createElement('post-container');
//    console.log(post);
//     postDiv.innerHTML = `
//            <h4> user-${post.userId} </h4>
//            <h5> post: ${post.title} </5>
//           <p> Post Descripttion ${post.body} </p>
//        `;
//        postContainer.appendChild(postDiv)
//    }
 

