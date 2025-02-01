import React from 'react';
import './RareSatsGrid.css';

const rareSatsData = [
  {
    title: 'Mythic',
    description: 'The first sat of the genesis block.',
    category: 'mythic'
  },
  {
    title: 'Legendary',
    description: 'The first sat of each cycle.',
    category: 'legendary'
  },
  {
    title: 'Epic',
    description: 'The first sat of each halving epoch.',
    category: 'epic'
  },
  {
    title: 'Rare',
    description: 'The first sat of each difficulty adjustment period.',
    category: 'rare'
  },
  {
    title: 'Uncommon',
    description: 'The first sat of each block.',
    category: 'uncommon'
  },
  {
    title: 'Common/Unknown',
    description: 'A sat of unknown rarity.',
    category: 'common'
  },
  {
    title: 'Black Legendary',
    description: 'The last sat of each cycle.',
    category: 'black-legendary'
  },
  {
    title: 'Black Epic',
    description: 'The last sat of each halving epoch.',
    category: 'black-epic'
  },
  {
    title: 'Black Rare',
    description: 'The last sat of each difficulty adjustment period.',
    category: 'black-rare'
  },
  {
    title: 'Black Uncommon',
    description: 'The last sat of each block.',
    category: 'black-uncommon'
  },
  {
    title: 'Fibonacci Sequence',
    description: 'Sats with IDs that follow the Fibonacci Sequence.',
    category: 'fibonacci'
  },
  {
    title: 'Palindrome',
    description: 'Sats with palindromic number (ex: 327543134573).',
    category: 'palindrome'
  },
  {
    title: '1D Pali',
    description: 'Sats with number composed of only 1 digit (ex: 888888888888).',
    category: 'one-d-pali'
  },
  {
    title: '2D Pali',
    description: 'Sats with palindromic number, composed of only 2 digit (ex: 888892222888).',
    category: 'two-d-pali'
  },
  {
    title: '3D Pali',
    description: 'Sats with palindromic number, composed of only 3 digit (ex: 888522255888).',
    category: 'three-d-pali'
  },
  {
    title: 'Sequence Pali',
    description: 'Sats with palindromic number, and a sequence of at least 3 consecutive identical digits (ex: 327543334573).',
    category: 'sequence-pali'
  },
  {
    title: 'Perfect Paliception',
    description: 'Sats with palindromic number made of a subsequence which is also a palindrome of at least 2 distinct digits.',
    category: 'perfect-pali'
  },
  {
    title: 'Block Pali',
    description: 'Sats with palindromic number, in a block with a palindromic number.',
    category: 'block-pali'
  },
  {
    title: 'Name Palindrome',
    description: 'Sats with palindromic names (ex: abcba).',
    category: 'name-palindrome'
  },
  {
    title: 'Alpha',
    description: 'The first sats in each bitcoin. They always end in at least 8 zeros.',
    category: 'alpha'
  },
  {
    title: 'Omega',
    description: 'The last sats in each bitcoin. They always end in at least 8 nines.',
    category: 'omega'
  },
  {
    title: 'First Transaction',
    description: 'Sats from the 10 bitcoins Satoshi Nakamoto sent Hal Finney in the first bitcoin transaction.',
    category: 'first-transaction'
  },
  {
    title: 'Block 9',
    description: 'Sats mined in Block 9 (the first block with sats circulating today).',
    category: 'block-9'
  },
  {
    title: 'Block 78',
    description: 'Sats mined by Hal Finney in Block 78 (the first block mined by someone other than Satoshi).',
    category: 'block-78'
  },
  {
    title: 'Nakamoto',
    description: 'Sats mined by Satoshi Nakamoto himself.',
    category: 'nakamoto'
  },
  {
    title: 'Vintage',
    description: 'Sats mined in the first 1000 bitcoin blocks.',
    category: 'vintage'
  },
  {
    title: 'Pizza',
    description: 'Sats involved in the famous pizza transaction from 2010.',
    category: 'pizza'
  },
  {
    title: 'Jpeg',
    description: 'Sats involved in the possible first bitcoin trade for an image on February 24, 2010.',
    category: 'jpeg'
  },
  {
    title: 'Hitman',
    description: 'Sats involved in the transaction made by Ross Ulbricht to hire a hitman.',
    category: 'hitman'
  },
  {
    title: 'Silkroad',
    description: 'Sats seized from Silk Road and auctioned off on June 27, 2014 by US Marshals.',
    category: 'silkroad'
  }
];

const RareSatsGrid = () => {
  return (
    <div className="rare-sats-grid-container">
      <div className="rare-sats-grid">
        {rareSatsData.map((sat, index) => (
          <div key={index} className={`rare-sat-card ${sat.category}`}>
            <div className="icon-placeholder">
              {/* Icon will be added later */}
            </div>
            <h3>{sat.title}</h3>
            <p>{sat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RareSatsGrid;
