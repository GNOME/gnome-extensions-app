// SPDX-FileCopyrightText: 2025 Florian Müllner <fmuellner@gnome.org>
// SPDX-License-Identifier: MIT OR LGPL-2.1-or-later

import {defineConfig} from '@eslint/config-helpers';
import gnome from 'eslint-config-gnome';

export default defineConfig([
    gnome.configs.recommended,
    {
        rules: {
            'camelcase': ['error', {
                properties: 'never',
            }],
            'consistent-return': 'error',
            'eqeqeq': ['error', 'smart'],
            'prefer-arrow-callback': 'error',
        },

        languageOptions: {
            globals: {
                _: 'readonly',
                C_: 'readonly',
                N_: 'readonly',
            },
        },
    },
]);
