import Image from 'next/image';
import './globals.css';

const bullshitPhrases = [
  "Optimiser les synergies transversales de la chaîne de valeur",
  "Déployer une approche holistique disruptive",
  "Monétiser le mindset des parties prenantes",
  "Opérer un pivot agile centré utilisateur",
  "Scalabiliser les pipelines d’innovation stratégique"
];

function getRandomPhrase() {
  return bullshitPhrases[Math.floor(Math.random() * bullshitPhrases.length)];
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white text-center">
      <Image src="/logo.png" alt="Logo" width={120} height={120} />
      <h1 className="text-3xl font-bold mt-4">Pipotron CCSC</h1>
      <p className="mt-4 text-lg text-gray-700">{getRandomPhrase()}</p>
    </main>
  );
}
