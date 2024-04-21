import { getCurrentUserProfile } from '@/app/lib/data';
import Profile from '@/app/ui/profile';

export default async function Page() {
  const { display_name, images, external_urls, followers } = await getCurrentUserProfile();
  return (
    <Profile
      displayName={display_name}
      totalFollowers={followers.total}
      profileImage={images[1].url}
      profileUrl={external_urls.spotify}
    />
  );
}
