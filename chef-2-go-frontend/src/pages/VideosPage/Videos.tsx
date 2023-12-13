// VideosPage.tsx
import React, { useState , useEffect} from 'react';
import VideoList from '../../components/Premium/VideosPage/VideoList';
import VideoCard from '../../components/Premium/VideosPage/VideoCard';
import SearchIcon from '@mui/icons-material/Search';
import Header from '../../components/Header/Header';
import SidebarNav from '../../components/SideBarNav/SidebarNav';

const VideosPage: React.FC = () => {
  const initialVideos = [
    { videoUrl: 'https://youtu.be/XlKe9MntN30', title: 'Tasty Egg Fried Rice - Amit (30mins)' },
    { videoUrl: 'https://youtu.be/SU_jumjL8qg', title: 'Mumbai Street Style Poha - Rakshit (10mins)' },
    { videoUrl: 'https://youtu.be/hrCS2Se0ZcU', title: 'Instant dosa - Anusha (10mins) ' },
    {videoUrl: 'https://youtu.be/S_GDu7PcROY', title: 'Layered crispy onion pakoda - Karthik (30mins)'},
    // {videoUrl: 'https://youtu.be/XMnYYhIorbA', title: 'Video Title 3'},
    { videoUrl: 'https://youtu.be/XlKe9MntN30', title: 'Tasty Egg Fried Rice - Amit (30mins)' },
    { videoUrl: 'https://youtu.be/SU_jumjL8qg', title: 'Mumbai Street Style Poha - Rakshit (10mins)' },
    { videoUrl: 'https://youtu.be/hrCS2Se0ZcU', title: 'Instant dosa - Anusha (10mins) ' },
    {videoUrl: 'https://youtu.be/S_GDu7PcROY', title: 'Layered crispy onion pakoda - Karthik (30mins)'},
    { videoUrl: 'https://youtu.be/XlKe9MntN30', title: 'Tasty Egg Fried Rice - Amit (30mins)' },

  ];
  const [videos, setVideos] = useState(initialVideos);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchSticky, setIsSearchSticky] = useState(false);
  let [menuState, setMenuState] = React.useState(false);

  const handleSearch = () => {
    const filteredVideos = initialVideos.filter((video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setVideos(filteredVideos);
    setIsSearchOpen(false);
  };

  const handleSearchIconClick = () => {
    setIsSearchOpen(true);
  };

  const handleBackdropClick = () => {
    setIsSearchOpen(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsSearchSticky(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-200 via-gray-300 to-gray-100">

<Header menuState={menuState} setMenuState={setMenuState}/>
        <SidebarNav menuState={menuState} setMenuState={setMenuState}/>

      <div
        className={`text-center pt-2 relative transition ${
          isSearchSticky ? 'fixed top-0 left-0 right-0 z-20' : ''
        }`}
      >
        <h1 className="text-4xl font-bold tracking-tight font-Morion text-gray-900 sm:text-6xl">
          Welcome to{' '}
          <button className="bg-dark-green p-3 rounded-xl text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white hover:font-semibold transition animate-ease-in">
            Chef2Go
          </button>{' '}
          Premium.
        </h1>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        {isSearchOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="bg-white p-4 rounded-md shadow-md w-96">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for videos..."
                  className="w-full border-2 border-gray-300 rounded-full py-2 px-4 pr-12 focus:outline-none shadow-md"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-0 top-0 h-full px-3 py-2 bg-dark-green text-white rounded-full hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white hover:font-semibold transition animate-ease-in"
                >
                  <SearchIcon />
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center justify-center mt-4">
          <div className="relative w-72">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for videos..."
                className="w-full border-2 border-gray-300 rounded-full py-2 px-4 pr-12 focus:outline-none shadow-md"
              />
              <button
                onClick={handleSearch}
                className="absolute right-0 top-0 h-full px-3 py-2 bg-dark-green text-white rounded-full hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white hover:font-semibold transition animate-ease-in"
              >
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8 p-10">
        <VideoList videos={videos} />
      </div>
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={handleBackdropClick}
        ></div>
      )}
    </div>
  );
};

export default VideosPage;