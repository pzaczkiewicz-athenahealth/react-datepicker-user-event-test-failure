import { ReactDatepicker } from '..';
import { Meta, StoryFn } from '@storybook/react';

const defaultMeta: Meta = {
  component: ReactDatepicker,
  title: 'Components/ReactDatepicker',
};
export default defaultMeta;

export const Standalone: StoryFn = () => <ReactDatepicker />;
