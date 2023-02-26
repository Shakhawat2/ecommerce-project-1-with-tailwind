import Community from '@/Components/Blog/Community';
import RecentBlog from '@/Components/Blog/RecentBlog';
import WeekBlog from '@/Components/Blog/WeekBlog';

const index = () => {
    return (
        <>
            <RecentBlog></RecentBlog>
            <WeekBlog></WeekBlog>
            <Community></Community>
        </>
    );
};

export default index;