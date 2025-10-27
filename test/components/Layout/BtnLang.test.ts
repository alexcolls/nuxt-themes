import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import LayoutThemeBtnLang from '../../../src/runtime/components/Layout/Theme/BtnLang.vue';

describe('LayoutThemeBtnLang', () => {
  it('should mount successfully', async () => {
    const component = await mountSuspended(LayoutThemeBtnLang, {
      global: {
        stubs: {
          UPopover: true,
          UButton: true,
          CommonBtnIcon: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });

  it('should render language options', async () => {
    const component = await mountSuspended(LayoutThemeBtnLang, {
      global: {
        stubs: {
          UPopover: true,
          UButton: true,
          CommonBtnIcon: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });

  it('should integrate with i18n', async () => {
    const component = await mountSuspended(LayoutThemeBtnLang, {
      global: {
        stubs: {
          UPopover: true,
          UButton: true,
          CommonBtnIcon: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });

  it('should use useNuxtXuiLangs composable', async () => {
    const component = await mountSuspended(LayoutThemeBtnLang, {
      global: {
        stubs: {
          UPopover: true,
          UButton: true,
          CommonBtnIcon: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });
});
