import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTAButtons = ({ className = "" }) => {
  const phoneNumber = '(203) 514-1452';
  const telLink = 'tel:2035141452';

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <a
        href={telLink}
        className="block"
      >
        <Button
          size="lg"
          className="w-full bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-6"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Now: {phoneNumber}
        </Button>
      </a>
      <Link to="/contact">
        <Button
          size="lg"
          variant="outline"
          className="w-full border-2 border-green-700 text-green-700 hover:bg-green-50 text-lg px-8 py-6"
        >
          <FileText className="w-5 h-5 mr-2" />
          Get a Free Quote
        </Button>
      </Link>
    </div>
  );
};

export default CTAButtons;