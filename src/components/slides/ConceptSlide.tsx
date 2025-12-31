import { useEffect, useRef, useState } from 'react';
import { ConceptSlide as ConceptSlideType, Theme } from '../../types/presentation';
import SlideWrapper from './SlideWrapper';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Gif } from '@giphy/react-components';
import type { IGif } from '@giphy/js-types';

// Initialize Giphy with API key (use environment variable in production)
const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY || 'dc6zaTOxFJmzC'); // demo key

// Cache for Giphy GIF data to avoid repeated API calls
const gifCache = new Map<string, IGif>();

interface ConceptSlideProps {
  slide: ConceptSlideType;
  theme: Theme;
  getLocalizedText: (text: string | { nl: string; en: string }) => string;
  isActive?: boolean;
}

function MermaidDiagram({ code, theme }: { code: string; theme: Theme }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderMermaid = async () => {
      if (!containerRef.current) return;

      try {
        const mermaid = (await import('mermaid')).default;

        mermaid.initialize({
          startOnLoad: false,
          theme: theme === 'personal' ? 'dark' : 'default',
          themeVariables: theme === 'personal' ? {
            primaryColor: '#6366f1',
            primaryTextColor: '#ffffff',
            primaryBorderColor: '#475569',
            lineColor: '#94a3b8',
            secondaryColor: '#1e293b',
            tertiaryColor: '#0f172a',
          } : {
            primaryColor: '#e31837',
            primaryTextColor: '#1a1a1a',
            primaryBorderColor: '#d1d5db',
            lineColor: '#6b7280',
            secondaryColor: '#f1f5f9',
            tertiaryColor: '#e2e8f0',
          },
        });

        const uniqueId = `mermaid-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
        const { svg } = await mermaid.render(uniqueId, code);
        containerRef.current.innerHTML = svg;
      } catch (error) {
        console.error('Mermaid rendering error:', error);
        containerRef.current.innerHTML = `<pre class="text-red-500">Error rendering diagram</pre>`;
      }
    };

    renderMermaid();
  }, [code, theme]);

  return (
    <div
      ref={containerRef}
      className="w-full my-6 flex items-center justify-center [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-h-[60vh]"
    />
  );
}

function SVGDiagram({ svg }: { svg: string }) {
  return (
    <div
      className="w-full my-6 flex items-center justify-center [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-h-[60vh]"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

function GiphyGif({ giphyId }: { giphyId: string }) {
  const [gif, setGif] = useState<IGif | null>(() => gifCache.get(giphyId) || null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Skip fetch if already cached
    if (gifCache.has(giphyId)) {
      setGif(gifCache.get(giphyId)!);
      return;
    }

    const fetchGif = async () => {
      try {
        const { data } = await gf.gif(giphyId);
        // Store in cache
        gifCache.set(giphyId, data);
        setGif(data);
      } catch (err) {
        setError('Failed to load GIF');
        console.error('Giphy fetch error:', err);
      }
    };
    fetchGif();
  }, [giphyId]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!gif) {
    return <div className="animate-pulse bg-slate-700 w-80 h-60 rounded-lg" />;
  }

  return (
    <div className="w-full max-w-xl my-8 flex items-center justify-center">
      <Gif gif={gif} width={400} noLink hideAttribution />
    </div>
  );
}

function DirectGif({ url }: { url: string }) {
  return (
    <div className="w-full max-w-xl my-8 flex items-center justify-center">
      <img src={url} alt="GIF" className="rounded-lg max-h-80" />
    </div>
  );
}

function VideoPlayer({ url }: { url: string }) {
  return (
    <div className="w-full max-w-3xl my-8 flex items-center justify-center">
      <video
        src={url}
        controls
        autoPlay
        loop
        muted
        className="rounded-lg shadow-xl max-h-96"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function VisualElement({
  type,
  icon,
  svg,
  mermaid,
  giphyId,
  gifUrl,
  videoUrl,
  theme
}: {
  type?: string;
  icon?: string;
  svg?: string;
  mermaid?: string;
  giphyId?: string;
  gifUrl?: string;
  videoUrl?: string;
  theme: Theme;
}) {
  const containerClasses = theme === 'personal'
    ? 'bg-slate-800 border-slate-600'
    : 'bg-gray-100 border-gray-300';

  if (svg) {
    return <SVGDiagram svg={svg} />;
  }

  if (mermaid) {
    return <MermaidDiagram code={mermaid} theme={theme} />;
  }

  if (giphyId) {
    return <GiphyGif giphyId={giphyId} />;
  }

  if (gifUrl) {
    return <DirectGif url={gifUrl} />;
  }

  if (videoUrl || type === 'video') {
    if (videoUrl) {
      return <VideoPlayer url={videoUrl} />;
    }
    return (
      <div
        className={`
          w-full max-w-3xl h-64 rounded-xl border-2 my-8
          flex items-center justify-center
          ${containerClasses}
        `}
      >
        <div className="text-center space-y-2">
          <div className="text-4xl opacity-50">🎬</div>
          <div className="text-lg opacity-75">Video Placeholder</div>
        </div>
      </div>
    );
  }

  if (type === 'icon' && icon) {
    return (
      <div className="w-full max-w-md h-48 flex items-center justify-center my-8">
        <div className="text-8xl">{icon}</div>
      </div>
    );
  }

  if (type === 'gif') {
    return (
      <div
        className={`
          w-full max-w-xl h-64 rounded-xl border-2 my-8
          flex items-center justify-center
          ${containerClasses}
        `}
      >
        <div className="text-center space-y-2">
          <div className="text-4xl opacity-50">🎞️</div>
          <div className="text-lg opacity-75">GIF Placeholder</div>
        </div>
      </div>
    );
  }

  if (type && type !== 'none') {
    return (
      <div
        className={`
          w-full max-w-2xl h-64 rounded-xl border-2 my-8
          flex items-center justify-center
          ${containerClasses}
        `}
      >
        <div className="text-center space-y-2">
          <div className="text-4xl opacity-50">
            {type === 'diagram' && '📊'}
            {type === 'flowchart' && '🔄'}
            {type === 'chart' && '📈'}
          </div>
          <div className="text-lg opacity-75 capitalize">
            {type} Placeholder
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export function ConceptSlide({ 
  slide, 
  theme, 
  getLocalizedText, 
  isActive = false 
}: ConceptSlideProps) {
  const titleClasses = theme === 'personal'
    ? 'text-white'
    : 'text-red-600';

  const contentClasses = theme === 'personal'
    ? 'text-slate-400'
    : 'text-gray-600';

  return (
    <SlideWrapper type="concept" theme={theme} isActive={isActive}>
      <div className="w-full max-w-6xl mx-auto space-y-4">
        <h2
          className={`
            text-2xl md:text-3xl lg:text-4xl font-semibold
            ${titleClasses}
          `}
        >
          {getLocalizedText(slide.title)}
        </h2>

        {slide.content && (
          <p
            className={`
              text-lg md:text-xl max-w-4xl mx-auto leading-relaxed
              ${contentClasses}
            `}
          >
            {getLocalizedText(slide.content)}
          </p>
        )}

        <VisualElement
          type={slide.visual}
          icon={slide.icon}
          svg={slide.svg}
          mermaid={slide.mermaid}
          giphyId={slide.giphyId}
          gifUrl={slide.gifUrl}
          videoUrl={slide.videoUrl}
          theme={theme}
        />
      </div>
    </SlideWrapper>
  );
}

export default ConceptSlide;