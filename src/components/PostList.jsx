import PostItem from "./PostItem";


const PostList = ({posts, title}) => {
	return ( 
		<div>
			{/* //инлайн стили */}
			<h1 style={{textAlign: 'center'}}>{title}</h1>
      		{posts.map((post, index) => 
        		<PostItem number={index + 1} post={post} key={post.id}/>
      )}
		</div>
	 );
}
 
export default PostList;