import { notFound, redirect } from 'next/navigation';
import { getGuide } from '@/lib/guide';

export default async function GuideRootPage({
  params,
}: {
  params: Promise<{ guideSlug: string }>;
}) {
  const { guideSlug } = await params;
  const guide = getGuide(guideSlug);
  if (!guide) notFound();
  redirect(`/courses/${guideSlug}/${guide.firstTopicSlug}`);
}
