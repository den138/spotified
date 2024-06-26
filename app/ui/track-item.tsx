import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function TrackItem({
  albumImageUrl,
  trackName,
  albumName,
  artistName,
  trackUrl,
}: {
  albumImageUrl: string;
  trackName: string;
  albumName: string;
  artistName: string;
  trackUrl: string;
}) {
  return (
    <Stack
      display="flex"
      direction="row"
      component={Link}
      href={trackUrl}
      sx={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Image src={albumImageUrl} height={90} width={90} alt="album image"></Image>
      <Stack justifyContent="center" sx={{ ml: 1 }}>
        <Typography>{trackName}</Typography>
        <Typography>{artistName}</Typography>
        <Typography>{albumName}</Typography>
      </Stack>
    </Stack>
  );
}
