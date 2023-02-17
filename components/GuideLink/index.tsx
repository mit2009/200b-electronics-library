import Link from 'next/link';

export const GuideLink = ({ href, target, children }: { href: string; target?: string; children: React.ReactNode }) => {
  return (
    <Link href={href} passHref>
      <a target={target}>{children}</a>
    </Link>
  );
};
