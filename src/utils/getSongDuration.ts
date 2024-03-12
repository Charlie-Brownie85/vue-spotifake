export default function getSongDuration(duration: number): string {
  const minutes = Math.floor(duration / 60000);
  const seconds = ((duration % 60000) / 1000).toFixed(0);
  return `${minutes}:${+seconds < 10 ? '0' : ''}${seconds}`;
}
