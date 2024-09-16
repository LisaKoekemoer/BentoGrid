import './App.css';
import createPost from './images/illustration-create-post.webp';
import fiveStars from './images/illustration-five-stars.webp';
import schedulePosts from './images/illustration-schedule-posts.webp';
import multiplePlatforms from './images/illustration-multiple-platforms.webp';
import consistentSchedule from './images/illustration-consistent-schedule.webp';
import growFollowers from './images/illustration-grow-followers.webp';
import audienceGrowth from './images/illustration-audience-growth.webp';
import aiContent from './images/illustration-ai-content.webp';

function App() {
  return (
    <>
      <div className='bento-grid'>
          <div className='item1'>
            <h1>Social Media <span className='tenX'>10x</span> <span className='fast'>Faster</span> with AI</h1>
            <img src={fiveStars} alt="" />
            <p>Over 4,000 5-star reviews.</p>
          </div>

          <div className='item2'>
            <div className='item2a'>
              <img src={multiplePlatforms} alt="" />
              <h4>Manage multiple accounts and platforms.</h4>
            </div>
            <div className='item2b'>
              <h4>Maintain a consistent posting schedule.</h4>
              <img src={consistentSchedule} alt="" />
            </div>
          </div>

          <div className='item3'>
            <h4>Schedule to social media.</h4>
            <img src={schedulePosts} alt="" />
            <p>Optimize post timings to publish content at the perfect time 
              for your audience. </p>
          </div>

          <div className='item4'>
            <img src={growFollowers} alt="" />
            <h3>Grow followers with non-stop content.</h3>
          </div>

          <div className='item5'>
            <h1>>56%</h1>
            <p>faster audience growth</p>
            <img src={audienceGrowth} alt="" />
          </div>

          <div className='item6'>
            <h4>Create and schedule content <span>quicker</span></h4>
            <img src={createPost} alt="" />
          </div>

          <div className='item7'>
            <h4>Write your content using AI.</h4>
            <img src={aiContent} alt="" />
          </div>
      </div>

    </>
  );
}

export default App;
