import React from 'react';

import BuildContentsAndLinks from './ContentsLinks';
import BuildTitleHeadline from './TitleHeadline';

/**
 * Represents the left section of a layout or page.
 *
 * This component aggregates and presents both the title headline and contents/links.
 * It's structured to provide a consistent visual flow and is intended to be a primary
 * segment within a broader layout.
 *
 * @component
 *
 * @example
 * ```
 * <LeftSection />
 * ```
 *
 * @returns {ReactElement} A component containing the title headline followed by contents and links.
 */
const LeftSection: React.FC = () => {
  return (
    <>
    <BuildTitleHeadline />
    <BuildContentsAndLinks />
    </>
  );
}

export default LeftSection;

