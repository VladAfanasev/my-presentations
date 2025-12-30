import { createFileRoute, notFound } from '@tanstack/react-router'
import Presentation from '../components/Presentation'
import { gettingStartedPresentation } from '../data/presentations'
import { PresentationData } from '../types/presentation'

// In a real app, this would fetch from an API or file system
function getPresentationBySlug(slug: string): PresentationData | null {
  switch (slug) {
    case 'getting-started':
      return gettingStartedPresentation;
    default:
      return null;
  }
}

export const Route = createFileRoute('/presentation/$slug')({
  component: PresentationPage,
  loader: ({ params }) => {
    const presentation = getPresentationBySlug(params.slug)
    if (!presentation) {
      throw notFound()
    }
    return { presentation }
  },
})

function PresentationPage() {
  const { presentation } = Route.useLoaderData()
  
  return <Presentation data={presentation} />
}