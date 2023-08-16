import React, {ReactNode} from 'react';

import { Headers, Containers } from './LeftStyles';

/**
 * Props for the BuildComponentLayout component.
 */
interface ComponentProps {
    children?: ReactNode;
};
/**
 * Constructs a consistent layout structure for wrapping content.
 *
 * This component provides a nested layout with padding, layout adjustments, and content spacing.
 * It uses the predefined Containers components for layout and takes children to be displayed
 * inside its content area.
 *
 * @component
 *
 * @example
 * ```
 * <BuildComponentLayout>
 *    <YourContentOrComponentHere />
 * </BuildComponentLayout>
 * ```
 *
 * @param {ComponentProps} props - The props for the component.
 * @returns {ReactElement} A styled layout component wrapping the passed children.
 */
const BuildComponentLayout: React.FC<ComponentProps> = ({ children }) => {
    return (
        <Containers.PaddedOuter>
            <Containers.LayoutPaper>
                <Containers.Content>
                    {children}
                </Containers.Content>
            </Containers.LayoutPaper>
        </Containers.PaddedOuter>
    );
};

/**
 * Constructs the title and headline section.
 *
 * This component utilizes the BuildComponentLayout for structure and consistency, and introduces
 * specific header elements with stylized typography to represent name, title, and a short description.
 *
 * @component
 *
 * @example
 * ```
 * <BuildTitleHeadline />
 * ```
 *
 * @returns {ReactElement} A component comprising the title and headline section.
 */
const BuildTitleHeadline: React.FC = () => {
    return (
        <BuildComponentLayout>
            <Headers.Name variant='h1'>
                Jonas Lindstrom
            </Headers.Name>
            <Headers.Title variant='h2'>
                Graduate Software Engineer
            </Headers.Title>
            <Headers.Description variant='h3'>
                I craft full-stack applications,
                combining frontend artistry with backend precision.
            </Headers.Description>
        </BuildComponentLayout>
    );
};

export default BuildTitleHeadline;
