

const Blog = ({blog}) => {
    const {cover, title} = blog;
    return (
        <div>
            <img src={cover} alt="" />
        </div>
    );
};

export default Blog;