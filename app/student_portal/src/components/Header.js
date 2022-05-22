import NavTabs from './NavTabs';
export default function Header() {
  return (
    <div>
      <header>
        <title>QUT Student Ledger</title>
        <meta name='description' content='Generate skills report' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </header>
      <NavTabs />
    </div>
  );
}
