import React from 'react';

const InvitationCard: React.FC = () => {
  return (
    <section className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
      <p className="text-lg">
        You are cordially invited to celebrate the wedding of
      </p>
      <h2 className="text-3xl font-serif text-antiqueGold mt-4">
        Ashwarya & Deepak
      </h2>
      <p className="mt-4">
        Join us on <strong>November 15, 2026</strong> for a beautiful Kerala-inspired
        wedding ceremony.
      </p>
    </section>
  );
};

export default InvitationCard;