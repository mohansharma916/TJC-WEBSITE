"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface FeaturedStoryProps {
    _id: string;
    translations: { language: string; title: string; shortDescription: string }[];
    publishedAt: string;
    author?: { name: string };
    featuredImage?: string;
}

interface SideStoryProps {
    _id: string;
    translations: { language: string; title: string }[];
    publishedAt: string;
    content?: string;
}
export default function FeaturedStory() {
  const [featuredStory, setFeaturedStory] = useState<FeaturedStoryProps | null>(null);
  const [sideStories, setSideStories] = useState<SideStoryProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
console.log('FeaturedStory component rendered',process.env.NEXT_PUBLIC_API_URL);
  useEffect(() => {



    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch featured story
        const featuredResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles/featured/en`);
        console.log('Featured Response:', featuredResponse.data);
        if (featuredResponse.data && featuredResponse.data.length > 0) {
          setFeaturedStory(featuredResponse.data[0]);
        }
        
        // Fetch recent stories for the side panel
        const recentResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles/latest`, {
          params: {
            limit: 8,
            status: 'published',
            sort: '-publishedAt'
          }
        });
        setSideStories(recentResponse.data);
        
      } catch (err:any) {
        setError(err.message || 'Failed to fetch stories');
        console.error('Error fetching stories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {featuredStory && (
        <div className="md:w-2/3 bg-white p-4 rounded-lg shadow-md">
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">FEATURED STORY</span>
          <h2 className="text-2xl font-bold mt-2">
            {featuredStory?.translations.find(t => t.language === 'en')?.title || 'No title available'}
          </h2>
          <p className="text-gray-600 mt-2">
            {new Date(featuredStory.publishedAt).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })} | {featuredStory.author?.name || 'Unknown author'}
          </p>
          {featuredStory.featuredImage && (
            <img
              src={featuredStory.featuredImage}
              alt={featuredStory.translations.find(t => t.language === 'en')?.title || 'Featured Story'}
              className="mt-4 w-full rounded-lg"
            />
          )}
          <p className="mt-4">
            {featuredStory.translations.find(t => t.language === 'en')?.shortDescription || ''}
          </p>
        </div>
      )}
      
      <div className="md:w-1/3 space-y-4">
        {sideStories.map((story) => (
          <div key={story._id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">
              {story.translations.find(t => t.language === 'en')?.title || 'No title available'}
            </h3>
            <p className="text-gray-600 text-sm">
              {new Date(story.publishedAt).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })} | {story.content ? Math.ceil(story.content.length / 1000) : 0} min read
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}