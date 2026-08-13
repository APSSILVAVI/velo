import { test, expect } from '@playwright/test'

/// AAA - Arrange, Act, Assert
/// PAVE - Preparar, Agir, Validar, Excluir
test('deve consultar um pedido aprovado', async ({ page }) => {
  // Arrange
  await page.goto('http://localhost:5173/')

  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')
  await page.getByRole('link', { name: 'Consultar Pedido' }).click()
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

  // Act - fazer a ação
  await page.getByTestId('search-order-id').fill('VLO-VF8ZON') 
  await page.getByTestId('search-order-button').click()

  await page.getByTestId('search-order-button').click()
  // assert - validar o resultado
  await expect(page.getByTestId('order-result-id')).toBeVisible()
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-VF8ZON')

  await expect(page.getByTestId('order-result-status')).toBeVisible()
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')

})