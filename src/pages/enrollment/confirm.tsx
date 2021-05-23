import { useState, ReactElement } from 'react';
import { Title } from '@components/base/Title';

import { Subtitle } from '@components/base/Subtitle';

export default function Confirm(): ReactElement {
  const [accept, setAccept] = useState(false);

  return (
    <>
      <Title text="Confirm" />
      <Subtitle text="Terms and conditions" />
      <div className="px-2 text-gray-600">
        <p className="mb-2">
          Terms Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis
          euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.
        </p>
        <p>
          Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor
          fringilla.
        </p>
      </div>

      <div className="flex items-center mt-8">
        <input
          id="termsAndConditions"
          type="checkbox"
          className="h-4 w-4 mr-2"
          onChange={() => setAccept((prev) => !prev)}
        />
        <label htmlFor="termsAndConditions">Accept terms and conditions</label>
      </div>
      <button
        className={`btn btn-primary mt-2 ${accept ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        type="button"
        disabled={!accept}
        onClick={() => console.log('click')}
      >
        Confirmar
      </button>
    </>
  );
}
