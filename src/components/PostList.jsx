import PostItem from "./PostItem";


const PostList = ({posts, title, remove}) => {
	return ( 
		<div>
			{/* //инлайн стили */}
			<h1 style={{textAlign: 'center'}}>{title}</h1>
      		{posts.map((post, index) => 
			// передаем функцию remove вниз в PostItem, чтобы там ее можно было вызвать
        		<PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
      )}
		</div>
	 );
}
 
export default PostList;