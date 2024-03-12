"use client"

import Button from '@/components/Button';
import Text from '@/components/Text';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Button
        label="Button"
        variant="primary"
        onClick={() => console.log('Clicked!')}
      />
      <div>
        <Text content="This is a small text" size="sm" color="text-gray-600" />
        <Text content="This is a default text" />
        <Text content="This is a large text" size="lg" color="text-blue-500" />
      </div>
    </main>
  );
}
