<?php

namespace App\Admin\AdminMenu;

use ShadowC\AdminBundle\Library\AdminMenu\AdminMenuInterface;
use ShadowC\AdminBundle\Library\AdminMenu\AdminMenuItem;

class CardMenu implements AdminMenuInterface
{

    public function getLabel(): ?string
    {
        return 'Cards';
    }

    public function getIconClass(): ?string
    {
        return 'bi bi-card';
    }

    public function getMenuItems(): array
    {
        return [
            new AdminMenuItem(
                'Cards',
                'sc_admin_card_view',
                'bi bi-card',
                'ROLE_APP_CARD',
            ),
        ];
    }

    public function getPriority(): int
    {
        return 1;
    }

    public function getTranslate(): bool
    {
        return false;
    }
}
